import { Component } from '@angular/core';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValues=()=>{

   let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
   console.log(data)

  }

}
