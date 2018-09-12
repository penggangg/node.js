var app = express();

var indexRouter = require('../routes/allApi');
var usersRouter = require('../routes/users');
var doubanRouter = require('../routes/douban');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/douban', doubanRouter);