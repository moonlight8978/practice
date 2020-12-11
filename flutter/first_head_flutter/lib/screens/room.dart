import 'package:first_head_flutter/api/room-api.dart';
import 'package:first_head_flutter/domain/message.dart';
import 'package:first_head_flutter/widgets/message-list-item.dart';
import 'package:flutter/material.dart';

class RoomScreenArguments {
  final String roomName;

  RoomScreenArguments(this.roomName);
}

class RoomScreen extends StatefulWidget {
  static const routeName = '/rooms/';

  final String roomName;

  RoomScreen({Key key, @required this.roomName}) : super(key: key);

  @override
  _RoomScreenState createState() => _RoomScreenState(roomName: roomName);
}

class _RoomScreenState extends State<RoomScreen> {
  Future<List<Message>> futureMessages;

  String roomName;

  _RoomScreenState({this.roomName});

  @override
  void initState() {
    super.initState();
    futureMessages = RoomApi.fetchMessages(roomName);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: Text(room.name)),
        body: FutureBuilder<List<Message>>(
            future: futureMessages,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                var messages = snapshot.data;
                return messages.isEmpty
                    ? Center(
                        child: Text("No messages."),
                      )
                    : ListView.builder(
                        itemCount: messages.length,
                        itemBuilder: (BuildContext context, int index) {
                          var message = messages[index];
                          return MessageListItem(
                            message: message,
                          );
                        });
              } else if (snapshot.hasError) {
                return Center(
                  child: Text("${snapshot.error}"),
                );
              }

              return Center(child: CircularProgressIndicator());
            }));
  }
}
