import 'package:first_head_flutter/api/room-api.dart';
import 'package:first_head_flutter/screens/room.dart';
import 'package:flutter/material.dart';

class RoomListScreen extends StatelessWidget {
  static const routeName = '/rooms';

  @override
  Widget build(BuildContext context) {
    var rooms = RoomApi.fetchRoomList();

    return Scaffold(
        appBar: AppBar(
          title: Text("Room list"),
        ),
        body: ListView.separated(
            itemCount: rooms.length,
            itemBuilder: (BuildContext context, int index) {
              var room = rooms[index];
              return GestureDetector(
                  onTap: () {
                    Navigator.pushNamed(context, RoomScreen.routeName,
                        arguments: RoomScreenArguments(room.name));
                  },
                  child: Container(
                      padding: EdgeInsets.symmetric(vertical: 16),
                      color: Colors.amber[500],
                      child: Center(child: Text(room.name))));
            },
            separatorBuilder: (BuildContext context, int index) =>
                const Divider()));
  }
}
