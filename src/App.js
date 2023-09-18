import './App.css';

function App() {
  const dateobj = new Date(2019,1,1,19);
  const time = dateobj.getHours();
  let text='';
  let TextColor={
    color :"red"
  }
  if(time >=0 && time <12)
    text="Good Morning";
  else if(time>=12 && time <18){
    text="Good Afternoon";
    TextColor.color = "green";
  }
  else{
    text="Good Evevning";
    TextColor.color = "Blue"
  }
  return (
    <div className="App">
     <h1 style={TextColor}>{text} </h1>
      <div>
        <img src='https://cloudfront-us-east-1.images.arcpublishing.com/pmn/OPKHDT2FBPB3Z6WJLYOWTUX3TI.jpg'/>
        <img src='https://c8.alamy.com/comp/GD90DA/saint-denis-france-d-10th-july-2016-cristiano-ronaldo-por-footballsoccer-GD90DA.jpg'/>
        <img src='https://ca-times.brightspotcdn.com/dims4/default/0ad1e26/2147483647/strip/true/crop/600x395+0+0/resize/1200x790!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7c%2F68%2Ff7b957b3e7a14420281efb221cea%2Fla-sp-sn-neymar-newborn-name-20130704-001'/>
      </div>        
    </div>
  );
}

export default App;
