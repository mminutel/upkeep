import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './Tasks.css';

class Tasks extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/tasks' component={TasksViewAll} />
          <Route exact path='/tasks/create' component={TasksCreate} />
          <Route path='/tasks/:taskId' component={TasksView} />
        </Switch>
      </div>
    );
  }

}

const TasksViewAll = (props) => {
  return (
    <div>
      All Tasks
    </div>
  )
}

const TasksCreate = (props) => {
  return (
    <div>
      Create Task
    </div>
  )
}

const TasksView = (props) => {
  return (
    <div>
      View Task
    </div>
  )
}

export default Tasks;
