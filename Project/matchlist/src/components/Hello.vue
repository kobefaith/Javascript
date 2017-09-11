<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,key ) in matchlist" class="matchlist" ref="matchlist">
        <h1 class="title">{{key.slice(0,4)}}年 {{key.slice(4,6)}}月 {{key.slice(6,8)}} 日</h1>
        <ul>
          <li  v-for="match in item" v-if="match.homeTeamTitle !==''" class="matchitem">
                <div class="matchtime">{{match.startTime.split(' ')[1]}}</div>
                <div class="match-content">
                  <div class="guestteam">
                    <div class="guesticon">
                      <img width="50" height="50" :src="match.guestTeamLogo"/>
                    </div>
                    <span class="guestname">{{match.guestTeamTitle}}</span>
                    <span v-if="match.guestTeamScore !==''" class="guestscore">{{match.guestTeamScore}}</span>
                  </div>
                  <div class="hometeam">
                    <div class="hosticon">
                      <img width="50" height="50" :src="match.homeTeamLogo"/>
                    </div>
                    <span class="hostname">{{match.homeTeamTitle}}</span>
                    <span v-if="match.homeTeamScore !==''" class="hometscore">{{match.homeTeamScore}}</span>
                  </div>

                </div>
                <!--<li class="commenter">1111111</li>-->
          </li>
        </ul>

      </li>
    </ul>)

  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  const ERR_OK = 0;
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        matchlist: {},
      }
    },
    created() {
//        this.$http.get('http://m.ty.pptv.com/msite/match/getLiveMatchList.htm').then((response) => {
//           response = response.body;
//           if (response.result === true) {
//             console.log(response.data)
//             this.matchlist = response.data;
//           }
//     });
     this.$http.get('/api/matchlist').then(response => {
       response = response.body;
       if (response.result === true) {
         this.matchlist = response.data;
       }
     });
   },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  h1 {
    font-weight: normal;
  }

  .hello {
    font-size: 0;
  }

  .matchlist {
    top: 174px;
    bottom: 46px;
    width: 100%;
    overflow: hidden;
    .title {
      padding-left: 14px;
      height: 80px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 30px;
      color: rgb(147, 153, 159);
      vertical-align: top;
      padding-top:50px;
      padding-left:50px;
      background: #f3f5f7;
    }
    .matchitem {
      padding: 2px 0;
      height:160px;
      border-bottom:1px solid rgba(7, 17, 27, 0.1);
      .matchtime{
        display: inline-block;
        width:60px;
        height:60px;
        font-size:30px;
        line-height:30px;
        color:red;
      //  background-color:rgb(147, 153, 159);
        vertical-align: top;
        padding-top:60px;
        margin-right:100px;

      }
      .match-content{
        display: inline-block;
        .guestteam{
          margin-top:10px;
          margin-bottom:30px;

        }
        .hometeam{
          margin-bottom:10px;
        }
        .guesticon, .hosticon {
          display: inline-block;
          vertical-align: top;

        }
        .guestname, .hostname {
          display: inline-block;
          //vertical-align: top;
          padding-top:7px;
          margin-left:20px;
          font-size: 30px;
          line-height: 30px;

        }

        .guesticon, .hosticon {
          margin: 0 5px;
        }
      }
      .commenter{
        display: inline-block;
        border-left:solid 1px #ffffff;
      }
    }

  }


</style>
