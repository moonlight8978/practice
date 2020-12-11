import 'package:cached_network_image/cached_network_image.dart';
import 'package:first_head_flutter/domain/message.dart';
import 'package:flutter/material.dart';

class MessageListItem extends StatelessWidget {
  final Message message;

  MessageListItem({this.message});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Container(
                child: ClipRRect(
                    borderRadius: BorderRadius.circular(999),
                    child: CachedNetworkImage(
                      imageUrl: "https://via.placeholder.com/48",
                      placeholder: (context, url) =>
                          CircularProgressIndicator(),
                      errorWidget: (context, url, error) => Icon(Icons.error),
                    )),
              )
            ],
          ),
          Expanded(
            child: Container(
                padding: EdgeInsets.only(left: 12),
                child: Column(children: <Widget>[
                  Container(
                    width: double.infinity,
                    padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    child: Text(message.user.name),
                  ),
                  Container(
                      width: double.infinity,
                      color: Colors.grey[200],
                      height: 48,
                      padding: EdgeInsets.symmetric(horizontal: 8),
                      alignment: Alignment.centerLeft,
                      child: Text(message.content))
                ])),
          )
        ],
      ),
    );
  }
}
