import 'package:first_head_flutter/domain/message.dart';
import 'package:first_head_flutter/domain/room.dart';
import 'package:first_head_flutter/domain/user.dart';

List<Room> rooms = [
  Room(name: "MainRoom"),
  Room(name: 'Room 1'),
  Room(name: 'Room 2')
];

Room room = Room(name: "MainRoom");
Map<String, List<Message>> allMessages = {
  "MainRoom": [
    Message(content: "hello", user: User(name: "u1"), room: room),
    Message(content: "bye", user: User(name: "u2"), room: room),
  ]
};

class RoomApi {
  static List<Room> fetchRoomList() {
    return rooms;
  }

  static Future<List<Message>> fetchMessages(String roomName) async {
    await Future.delayed(const Duration(seconds: 2));
    return allMessages[roomName] ?? [];
  }
}
