const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const nodemailer = require('nodemailer');
const port=process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/static'));
app.set('view engine','ejs');


var mailData;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/home.html');
})



app.get('/orders',function(req,res){
    res.sendFile(__dirname+'/orders.html');
})

app.post('/cart',function(req,res){
   let data=Object.entries(req.body);
   mailData=data;
    data[0].push(35);
    data[1].push(20);
    data[2].push(20);
    data[3].push(30);
    data[4].push(15);
    data[5].push(25);
    data[6].push(210);
    data[7].push(100);
    data[8].push(5);
    data[9].push(15);
    data[10].push(8);
    res.render('cart',{data:data});
})


app.post('/order-placed',(req,res)=>{
    

    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'unekcustomercare@gmail.com', // generated ethereal user
        pass: 'Yesandno@123'  // generated ethereal password
    }
  });
  var mailingList=['nabeelnov77@gmail.com','shariffsharif27@gmail.com','ziyanzaid77@gmail.com']
  // setup email data with unicode symbols
  let mailOptions = {
      from: 'unekcustomercare@gmail.com', // sender address
      to: mailingList, // list of receivers
      subject: 'New order', // Subject line
      text: `New Order`, // plain text body
      html:`<p>Name : ${req.body.name}</p>
      <p>Number : ${req.body.number}</p>
      <p>Address : ${req.body.address}</p>
      <p>Shirt and pant(pair) : ${mailData[0][1]}</p>
      <p>Shirt : ${mailData[1][1]}</p>
      <p>Pant : ${mailData[2][1]}</p>
      <p>Dresses : ${mailData[3][1]}</p>
      <p>Bed Cover (Single) : ${mailData[4][1]}</p>
      <p>Bed Cover (Double) : ${mailData[5][1]}</p>
      <p>Blankets(Big) : ${mailData[6][1]}</p>
      <p>Blankets(Small) : ${mailData[7][1]}</p>
      <p>Pillow : ${mailData[8][1]}</p>
      <p>Curtains : ${mailData[9][1]}</p>
      <p>Big Carpet : ${mailData[10][1]}</p>
      <h2>Total quantity : ${req.body.tquan}</h2>
      <h1>Price payable : ${req.body.pricep}</h1>`
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });

})


app.listen(port,()=>{
    console.log('server up at '+port);
})