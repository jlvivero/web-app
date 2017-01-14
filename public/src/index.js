 var Complete = React.createClass({
   getInitialState: function(){
     return {page: 0}
   },
   onButtonClick: function(value){
     this.setState({
       page: value
     });
   },
   render: function(){
     return(
       <div className="Complete">
         <Header onButtonClick={this.onButtonClick}/>
         <Body page={this.state.page}/>
         <Footer/>
       </div>
     );
   }
 });


var Header = React.createClass({
  goHome: function(){
    this.props.onButtonClick(0);
  },
  goForms: function(){
    this.props.onButtonClick(1);
  },
  goShow: function(){
    this.props.onButtonClick(2);
  },
  render: function(){
    return(
      <div className="Header">
        <section className="page-nav">
          <section className="btnl">
            <button className="btn" onClick={this.goHome}>Home</button>
          </section>
          <section className="btnr">
            <button className="btn" onClick={this.goForms}>Forms</button>
            <button className="btn" onClick={this.goShow}>Other Stuff</button>
          </section>
        </section>
        <section className="page-header">
          <h1 className="project-name">React Example</h1>
          <h2 className="project-tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit velit iaculis sodales fringilla. In libero ligula, efficitur id sapien vel, fringilla ornare turpis. Nulla aliquam odio vitae odio dapibus posuere. Suspendisse sagittis turpis id lorem aliquam, dignissim malesuada dolor mattis. Nunc consequat, nulla sed aliquam eleifend, elit arcu dictum enim, et dignissim massa erat at libero. Phasellus molestie leo eget arcu lacinia, a maximus neque malesuada. Sed aliquam non justo a tristique. </h2>
        </section>
      </div>
    );
  }
});

var Body = React.createClass({
  submitStuff: function(){
    var sendString = "id=" + this.refs.stuffid.value + "&name=" + this.refs.name.value + "&comment=" + this.refs.comment.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://localhost:3000/add', true);
    xmlhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(sendString);
    return;
  },
  getStuff: function(){
    var stuff;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'http://localhost:3000/show', false);
    xmlhttp.send();
    stuff = xmlhttp.responseText;
    console.log(stuff);
    return stuff;
  },
  printThis: function(data){
    var text = [];
    var temp = "";
    console.log(data);
    var i = 0;
    text = '<table border="1"><tr><th>id</th><th>name</th><th>comment</th></tr>'
    for(i = 0; i < data.length; i = i + 1){
      text = text + "<tr><td>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].comment + "</td>";
    }
    text = text + "</tr></table>"
    return text;
  },
  renderHome: function(){
    return(
      <div className="Body">
        <section className="main-content">
          <h1>
            <a id="random" className="anchor" href="#Random" aria-hidden="true"><span aria-hidden="true" className="ref-link"></span></a>Random text</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit velit iaculis sodales fringilla. In libero ligula, efficitur id sapien vel, fringilla ornare turpis. Nulla aliquam odio vitae odio dapibus posuere.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
      </div>
    );
  },
  renderForms: function(){
    return(
      <div className="Body">
        <section className="main-content">
          <h1>
            <a id="Forms" className="anchor" href="#Forms" aria-hidden="true"><span aria-hidden="true" className="ref-link"></span></a>Add Stuff</h1>
          <p>id</p>
          <input type="number" ref="stuffid" />
          <br></br>
          <p>name </p>
          <input type="text" ref="name" />
          <br></br>
          <p>comment</p>
          <input type="text" ref="comment"/>
          <br></br><br></br>
          <button className="btn2" onClick={this.submitStuff}>submit</button>
        </section>
      </div>
    );
  },
  renderShow: function(){
    var print = this.getStuff();
    var jsonResponse = JSON.parse(print);
    var text = this.printThis(jsonResponse);
    return(
      <div className="Body">
        <section className="main-content">
          <h1>
            <a id="show" className="anchor" href="#Show" aria-hidden="true"><span aria-hidden="true" className="ref-link"></span></a>How to</h1>
            <td dangerouslySetInnerHTML={{__html: text}} />
        </section>
      </div>
    )
  },
  render: function(){
    if(this.props.page === 0){
      return this.renderHome();
    }
    else{
      if(this.props.page === 1){
        return this.renderForms();
      }
      else{
        if(this.props.page === 2){
          return this.renderShow();
        }
        else{
          return this.renderHome();
        }
      }
    }
  }
});

var Footer = React.createClass({
  render: function(){
    return(
      <div className="Footer">
      <br></br><br></br>
        <div className="made">
          <p>Made by <a href="https://github.com/jlvivero/">Jose Luis Vivero</a> </p>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Complete />, document.getElementById('content'));
