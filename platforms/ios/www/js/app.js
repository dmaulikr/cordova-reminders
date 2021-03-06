var app;

app = {
  dom: $('.app'),
  components: {
    header: $('<h1>Reminders</h1>'),
    input: $('<input class="form-control" autofocus>'),
    submit: $('<button class="btn btn-primary">Submit</button>'),
    list: $('<ul>')
  },
  render: function() {
    var component, k, _ref, _results;
    this.dom.empty();
    _ref = this.components;
    _results = [];
    for (k in _ref) {
      component = _ref[k];
      _results.push(this.dom.append(component));
    }
    return _results;
  },
  initialize: function() {
    return this.bindEvents();
  },
  bindEvents: function() {
    var addToList;
    document.addEventListener('deviceready', this.onDeviceReady, false);
    addToList = _.bind(this.addToList, app);
    this.components.submit.on('click', addToList);
    return this.components.input.on('keyup', function(e) {
      if (e.keyCode === 13) {
        return addToList();
      }
    });
  },
  addToList: function() {
    var li, task;
    task = this.components.input.val();
    if (!task) {
      return;
    }
    li = $('<li>');
    li.text(task);
    this.components.list.append(li);
    return this.components.input.val('').focus();
  },
  onDeviceReady: function() {
    return app.render();
  }
};

$(function() {
  return app.initialize();
});
