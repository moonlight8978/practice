class Task < ApplicationRecord
  extend Enumerize

  belongs_to :creator, class_name: "User"
  belongs_to :assignee, class_name: "User", optional: true

  enumerize :status, in: [:todo, :in_progress, :done], default: :todo

  scope :sort_view, -> do
    tasks = arel_table

    status_ordering_attr = "status_int"
    status_mapping = Arel::Nodes::Case.new(tasks[:status])
      .when(status.todo).then(-1)
      .when(status.in_progress).then(0)
      .when(status.done).then(1)
      .as(status_ordering_attr)

    time_ordering = Arel::Nodes::Case.new(tasks[:status])
      .when(status.todo).then(tasks[:created_at])
      .when(status.in_progress).then(tasks[:started_at])
      .when(status.done).then(tasks[:finished_at])

    self
      .select(tasks[Arel.star], status_mapping.to_sql)
      .order("#{status_ordering_attr} ASC", time_ordering.asc, tasks[:id].asc)
  end
end
