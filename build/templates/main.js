'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return _server2.default.renderToStaticMarkup(_react2.default.createElement(
    'html',
    { lang: 'en' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        'Patriot'
      ),
      _react2.default.createElement('meta', { charSet: 'utf8' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/images/apple-icon-57x57.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/images/apple-icon-60x60.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/apple-icon-72x72.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/images/apple-icon-76x76.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/images/apple-icon-114x114.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/apple-icon-120x120.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/apple-icon-144x144.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/images/apple-icon-152x152.png' }),
      _react2.default.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-icon-180x180.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/android-icon-192x192.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon-32x32.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon-96x96.png' }),
      _react2.default.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon-16x16.png' }),
      _react2.default.createElement('meta', { name: 'msapplication-TileColor', content: '#ffffff' }),
      _react2.default.createElement('meta', { name: 'msapplication-TileImage', content: '/images/ms-icon-144x144.png' }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: cssSrc }),
      _react2.default.createElement('link', { href: '/fonts/font-awesome.css', rel: 'stylesheet' })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'container' }),
      _react2.default.createElement('script', { type: 'text/javascript', src: jsSrc })
    )
  ));
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'production';
var jsSrc = env === 'production' ? '/client.js' : 'http://localhost:8080/client.js';

var cssSrc = env === 'production' ? '/main.css' : 'http://localhost:8080/main.css';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvdGVtcGxhdGVzL21haW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFZZSxZQUFXO0FBQ3hCLFNBQU8saUJBQWUsb0JBQWYsQ0FDTDtBQUFBO0FBQUEsTUFBTSxNQUFLLElBQVg7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRSw4Q0FBTSxTQUFRLE1BQWQsR0FGRjtBQUdFLDhDQUFNLE1BQUssVUFBWCxFQUFzQixTQUFRLHFDQUE5QixHQUhGO0FBSUUsOENBQU0sS0FBSSxrQkFBVixFQUE2QixPQUFNLE9BQW5DLEVBQTJDLE1BQUssOEJBQWhELEdBSkY7QUFLRSw4Q0FBTSxLQUFJLGtCQUFWLEVBQTZCLE9BQU0sT0FBbkMsRUFBMkMsTUFBSyw4QkFBaEQsR0FMRjtBQU1FLDhDQUFNLEtBQUksa0JBQVYsRUFBNkIsT0FBTSxPQUFuQyxFQUEyQyxNQUFLLDhCQUFoRCxHQU5GO0FBT0UsOENBQU0sS0FBSSxrQkFBVixFQUE2QixPQUFNLE9BQW5DLEVBQTJDLE1BQUssOEJBQWhELEdBUEY7QUFRRSw4Q0FBTSxLQUFJLGtCQUFWLEVBQTZCLE9BQU0sU0FBbkMsRUFBNkMsTUFBSyxnQ0FBbEQsR0FSRjtBQVNFLDhDQUFNLEtBQUksa0JBQVYsRUFBNkIsT0FBTSxTQUFuQyxFQUE2QyxNQUFLLGdDQUFsRCxHQVRGO0FBVUUsOENBQU0sS0FBSSxrQkFBVixFQUE2QixPQUFNLFNBQW5DLEVBQTZDLE1BQUssZ0NBQWxELEdBVkY7QUFXRSw4Q0FBTSxLQUFJLGtCQUFWLEVBQTZCLE9BQU0sU0FBbkMsRUFBNkMsTUFBSyxnQ0FBbEQsR0FYRjtBQVlFLDhDQUFNLEtBQUksa0JBQVYsRUFBNkIsT0FBTSxTQUFuQyxFQUE2QyxNQUFLLGdDQUFsRCxHQVpGO0FBYUUsOENBQU0sS0FBSSxNQUFWLEVBQWlCLE1BQUssV0FBdEIsRUFBa0MsT0FBTSxTQUF4QyxFQUFtRCxNQUFLLGtDQUF4RCxHQWJGO0FBY0UsOENBQU0sS0FBSSxNQUFWLEVBQWlCLE1BQUssV0FBdEIsRUFBa0MsT0FBTSxPQUF4QyxFQUFnRCxNQUFLLDJCQUFyRCxHQWRGO0FBZUUsOENBQU0sS0FBSSxNQUFWLEVBQWlCLE1BQUssV0FBdEIsRUFBa0MsT0FBTSxPQUF4QyxFQUFnRCxNQUFLLDJCQUFyRCxHQWZGO0FBZ0JFLDhDQUFNLEtBQUksTUFBVixFQUFpQixNQUFLLFdBQXRCLEVBQWtDLE9BQU0sT0FBeEMsRUFBZ0QsTUFBSywyQkFBckQsR0FoQkY7QUFpQkUsOENBQU0sTUFBSyx5QkFBWCxFQUFxQyxTQUFRLFNBQTdDLEdBakJGO0FBa0JFLDhDQUFNLE1BQUsseUJBQVgsRUFBcUMsU0FBUSw2QkFBN0MsR0FsQkY7QUFtQkUsOENBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQU8sTUFBOUIsR0FuQkY7QUFvQkUsOENBQU0sTUFBSyx5QkFBWCxFQUFxQyxLQUFJLFlBQXpDO0FBcEJGLEtBREY7QUF1QkU7QUFBQTtBQUFBO0FBQ0UsNkNBQUssSUFBRyxXQUFSLEdBREY7QUFFRSxnREFBUSxNQUFLLGlCQUFiLEVBQStCLEtBQU0sS0FBckM7QUFGRjtBQXZCRixHQURLLENBQVA7QUE4QkQsQzs7QUEzQ0Q7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxNQUFNLFFBQVEsR0FBUixDQUFZLFFBQVosSUFBd0IsWUFBcEM7QUFDQSxJQUFNLFFBQVEsUUFBUSxZQUFSLEdBQ1YsWUFEVSxHQUVWLGlDQUZKOztBQUlBLElBQU0sU0FBUyxRQUFRLFlBQVIsR0FDWCxXQURXLEdBRVgsZ0NBRkoiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RTZXJ2ZXJEb20gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdwcm9kdWN0aW9uJztcbmNvbnN0IGpzU3JjID0gZW52ID09PSAncHJvZHVjdGlvbidcbiAgPyAnL2NsaWVudC5qcydcbiAgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NsaWVudC5qcyc7XG5cbmNvbnN0IGNzc1NyYyA9IGVudiA9PT0gJ3Byb2R1Y3Rpb24nXG4gID8gJy9tYWluLmNzcydcbiAgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL21haW4uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBSZWFjdFNlcnZlckRvbS5yZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8dGl0bGU+UGF0cmlvdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGY4XCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjU3eDU3XCIgaHJlZj1cIi9pbWFnZXMvYXBwbGUtaWNvbi01N3g1Ny5wbmdcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjYweDYwXCIgaHJlZj1cIi9pbWFnZXMvYXBwbGUtaWNvbi02MHg2MC5wbmdcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9pbWFnZXMvYXBwbGUtaWNvbi03Mng3Mi5wbmdcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjc2eDc2XCIgaHJlZj1cIi9pbWFnZXMvYXBwbGUtaWNvbi03Nng3Ni5wbmdcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPVwiL2ltYWdlcy9hcHBsZS1pY29uLTExNHgxMTQucG5nXCIvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9pbWFnZXMvYXBwbGUtaWNvbi0xMjB4MTIwLnBuZ1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTQ0eDE0NFwiIGhyZWY9XCIvaW1hZ2VzL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE1MngxNTJcIiBocmVmPVwiL2ltYWdlcy9hcHBsZS1pY29uLTE1MngxNTIucG5nXCIvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9pbWFnZXMvYXBwbGUtaWNvbi0xODB4MTgwLnBuZ1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE5MngxOTJcIiAgaHJlZj1cIi9pbWFnZXMvYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZ1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjk2eDk2XCIgaHJlZj1cIi9pbWFnZXMvZmF2aWNvbi05Nng5Ni5wbmdcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvaW1hZ2VzL2Zhdmljb24tMTZ4MTYucG5nXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUltYWdlXCIgY29udGVudD1cIi9pbWFnZXMvbXMtaWNvbi0xNDR4MTQ0LnBuZ1wiLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPXsgY3NzU3JjIH0vPlxuICAgICAgICA8bGluayBocmVmPVwiL2ZvbnRzL2ZvbnQtYXdlc29tZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIi8+XG4gICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz17IGpzU3JjIH0+PC9zY3JpcHQ+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl19