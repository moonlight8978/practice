import 'package:first_head_flutter/screens/room-list.dart';
import 'package:first_head_flutter/screens/room.dart';
import 'package:flutter/material.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    IO.Socket socket = IO.io('http://localhost:8888/');

    socket.onConnect((_) {
      print('connect');
    });

    socket.on('connected', (data) => print(data));

    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        initialRoute: '/rooms',
        onGenerateRoute: (RouteSettings settings) {
          var routes = {
            RoomListScreen.routeName: (context) => RoomListScreen(),
            RoomScreen.routeName: (context) {
              RoomScreenArguments args = settings.arguments;
              return RoomScreen(roomName: args.roomName);
            },
          };
          WidgetBuilder builder = routes[settings.name];
          return MaterialPageRoute(builder: (ctx) => builder(ctx));
        });
  }
}
