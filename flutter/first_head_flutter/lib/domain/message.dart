import 'package:first_head_flutter/domain/room.dart';
import 'package:first_head_flutter/domain/user.dart';
import 'package:meta/meta.dart';

class Message {
  User user;
  Room room;
  String content;
  int socketId;

  Message(
      {@required this.user,
      @required this.room,
      @required this.content,
      this.socketId});
}
