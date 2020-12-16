class UserRole
  include Singleton

  def arel_table
    return @arel_table if @arel_table

    employee_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.employee).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('1').as('role_int'))

    leader_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.leader).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('2').as('role_int'))

    manager_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.manager).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('3').as('role_int'))

    admin_row = Arel::SelectManager.new
      .project(Arel::Nodes::Quoted.new(User.role.admin).as('role'))
      .project(Arel::Nodes::SqlLiteral.new('4').as('role_int'))

    @arel_table = Arel::Nodes::TableAlias.new(
      Arel::Nodes::UnionAll.new(
        Arel::Nodes::UnionAll.new(
          employee_row,
          leader_row
        ),
        Arel::Nodes::UnionAll.new(
          manager_row,
          admin_row
        )
      ),
      'role_mappings'
    )
  end
end
