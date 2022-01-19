import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '최한결',
  'birthday' : '930920',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '권준기',
  'birthday' : '030123',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '조현정',
  'birthday' : '920123',
  'gender' : '여자',
  'job' : '대학생'
}]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
              key = {c.id}
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.gender}/>
            );
            })
         
        }
      </div>
);
  }
}
export default App;
