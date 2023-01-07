# Imagenie
A one-stop destination for all your image operations. The operation offered to include:
<ul>
  <li>Compress</li>
  <li>Crop</li>
  <li>Convert image to PDF </li>
  <li>Extract the metadata of the image</li>
  <li>Resize the image</li>
  <li>Add watermark to an image</li>
  <li>Create a thumbnail</li>
 </ul>
<br>
<p>We <b>do not</b> store any of the user data. The image is accepted both in form of <b>link to the image or the file</li>. The output is a downloadable image file. The web application has secured login and signup based on <b>auth0</b> and the features which are implemented draw from the APIs found on the platform <b>ApyHUB</b>. There is also a notification feature so that a user would know when the image is ready, thus saving the user's time. This was implemented using the services provided by <b>Twilio</b>.</p>
<br>
<h1>Usage</h1>
The tool is very simple to use. The user has to either provide a link or upload the file for the operation that they wish to perform. The operation would also have some specific parameters such as the height and width of the resultant image etc. This information needs to be filled in by the user in the user-friendly forms based on React.js. The robust backend based on Nodejs then handled the optimisation and produced the final image for the user. The user also receives a notification in the form of an SMS when the image optimization has been completed.
</br>

<h1>The technologies used are:</h1>
<ul>
  <li>React.js</li>
  <li>Nodejs</li>
  <li>Material UI</li>
  <li>Tailwind CSS</li>
  <li>Axios</li>
  <li>ApyHUB</li>
  <li>Twilio</li>
  <li>Auth0</li>
</ul>

<br>
<h1>ApyHUB</h1>
 ApyHUB is a platform that boasts a large number of ready-to-use APIs. The platform is easy to use and integrate. The API used to perform each task can be found on ApyHUB. The links for each are:
 <ul>
  <li> https://apyhub.com/utility/image-processor-extract-metadata -> extract metadata of the image</li>
  <li>https://apyhub.com/utility/image-processor-compress -> compress image </li>
  <li>https://apyhub.com/utility/image-processor-watermark -> watermark an image</li>
  <li>https://apyhub.com/utility/image-processor-resize -> resize image</li>
  <li>https://apyhub.com/utility/image-processor-crop -> crop image</li>
  <li>https://apyhub.com/utility/image-processor-thumbnail -> generate thumbnail </li>
  <li>https://apyhub.com/utility/converter-image-pdf -> convert image to pdf</li>
 </ul>
</br>
<h1>Auth0</h1>
Auth0 is a flexible and robust framework to add authentication and authorization services to your applications. It was used to <b>implement secure login and signup using the Google ID</b> of the user. This ensured that the user was nonmalicious and secured the web application.
<br>
<h1>Twilio</h1>
Twilio is a service that provides message, chat and call features to a web application. It was used to <b>send alerts on mobile via SMS and Whatsapp message </b> about the status of their file. Larger files require more time to be uploaded; thus, the user would be notified when they are ready. This would ensure that there is no time wasted on the user end.

