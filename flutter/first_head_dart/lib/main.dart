import 'package:flutter/material.dart';
import 'package:meta/meta.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class Point {
  double x;
  double y;

  Point();

  Point.origin() {
    x = 0;
    y = 0;
  }

  @override
  String toString() {
    return "x: $x, y: $y";
  }

  double distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}

class ThreeDPoint extends Point {
  double z;

  ThreeDPoint() : super.origin() {
    z = 0;
  }

  @override
  String toString() {
    var twoDPointString = super.toString();
    return "$twoDPointString, z: $z";
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

enum Color { red, green, blue }

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() async {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });

    var neighbor = 'XXX';
    final String name = 'Bich';
    int age = 20;
    final double PI = 3.14;
    bool married = false;
    List<int> list = const [1, 2, 3];
    var list2 = <int>[...list, 4];
    var list3 = [...list2, ...?null, 5];
    var nav = ['Home', 'Plants', if (married) 'Outlet'];
    var listOfInts = [1, 2, 3];
    var listOfStrings = ['#0', for (var i in listOfInts) '#$i'];
    Set<String> halogens = {
      'fluorine',
      'chlorine',
      'bromine',
      'iodine',
      'astatine'
    };
    var friends = <String>{};
    friends.add("friend1");
    friends.addAll(halogens);

    Map<String, String> gifts = {
      'first': 'first',
      'second': 'second',
      'third': 'third'
    };

    var nobleGases = <int, String>{2: 'helium', 10: 'neon', 18: 'argon'};

    bool isNoble(int atomicNumber) {
      return nobleGases[atomicNumber] != null;
    }

    bool isNobleShortHand(int atomicNumber) => nobleGases[atomicNumber] != null;

    void enableFlags({bool bold, @required bool hidden}) {}

    enableFlags(bold: true, hidden: false);

    void say(String from, String message, [String device = 'android']) {
      var result = '$from says $message';
      result = '$result with a $device';
      print(result);
    }

    say('bich', 'hellooooo', 'ip');

    void printElement(String element) {
      print(element);
    }

    friends
      ..add('new friend')
      ..forEach(printElement);

    list.forEach((item) => print('${list.indexOf(item)}: $item'));

    void willThrowError(int num) {
      switch (num) {
        case 1:
          throw UnimplementedError();
          break;

        case 2:
          throw FormatException('Expected at least 1 section');
          break;

        case 3:
          throw "Some random string";
          break;

        default:
          throw Exception("Common exception");
          break;
      }
    }

    try {
      willThrowError(1);
    } on UnimplementedError catch (e, stack) {
      print("Unimplemented $e");
      print("Stack trace:\n $stack");
    } catch (e, stack) {
      print("Unknown exception $e");
      print("Stack trace:\n $stack");
      rethrow;
    } finally {
      print("Finally");
    }

    var point = Point();
    point.x = 4;
    point.y = 5;
    print(point);

    var point2 = Point.origin();
    print(point2);

    print(point.distanceTo(point2));

    var point3 = ThreeDPoint();
    print(point3);

    var aColor = Color.green;

    switch (aColor) {
      case Color.red:
        print('Red as roses!');
        break;
      case Color.green:
        print('Green as grass!');
        break;
      default:
        print(aColor);
        break;
    }

    // Future<String> lookUpVersion() async {
    //   return "1.0.1";
    // }

    Future<String> lookUpVersion() async => "1.0.1";

    Future<bool> checkVersion() async {
      return await lookUpVersion() == "1.0.1";
    }

    try {
      var isUpToDate = await checkVersion();
      print(isUpToDate);
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have clicked the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
