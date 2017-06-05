import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { firebaseApp } from '../firebase';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem'

class GoalList extends Component {

  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        //let goalObject = goal.val()
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey})
        console.log('goal: ', goal)
      })
      //console.log('goals', goals)
      this.props.setGoals(goals);
    })
  }

addGoal() {
  //console.log('current state', this)
  const { title } = this.state;
  const { email } = this.props.user;
  goalRef.push({email, title})
}
  render() {
    //console.log('this.props.goals: ', this.props.goals)
    return (
      <div>
       {
        this.props.goals.map((goal, index) => {
          return (
              <GoalItem key={index} goal={goal} />
            )
        })
       }
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, {setGoals})(GoalList);