<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background: #000;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.App {
  text-align: center;
  min-height: 110vh;
  background: #000;
  transition: 0.2;
  padding-bottom: 30px;
}

/* .App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
} */

#root {
  background: #000;
}

.headerLinks,
button {
  cursor: pointer;
}

.header {
  width: 100vw;
  height: 7vh;
  background: rgba(47, 69, 80, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f4f4f9;
  font-family: "Sonsie One", cursive;
}

.headerLinks {
  font-size: 25px;
  font-weight: bold;
  justify-self: flex-end;
  display: flex;
  list-style-type: none;
  width: 30vw;
  justify-content: space-around;
}

.headerListItem:hover {
  text-shadow: -0.5px -0.5px 0 #f4f4f9, -0.5px -0.5px 0 #f4f4f9,
    -0.5px -0.5px 0 #f4f4f9, -0.5px -0.5px 0 #f4f4f9;
}

.appTitle {
  text-align: center;
  margin-left: 20px;
  font-weight: 800;
  font-size: 30px;
  cursor: pointer;
}

.pageTitle {
  width: 100vw;
  padding: 7px;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: #f4f4f9;
  background: rgba(47, 69, 80, 0.15);
  font-family: "Sonsie One", cursive;
}

.addBtnContainer {
  width: 100vw;
}

/* Styling for Search Results */

.searchComponent {
  display: flex;
  width: 90vw;
  min-height: 110vh;
  margin: 0px auto;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "Open Sans", sans-serif;
}

.searchBar {
  display: flex;
  justify-content: center;
  width: 100vw;
}

.searchInput {
  width: 30vw;
  height: 30px;
  font-size: 14pt;
  background: rgba(47, 69, 80, 0.3);
  color: #f4f4f9;
  border: none;
  padding: 0px 7px;
}

.resultBox {
  display: flex;
  margin: 20px 10px;
  width: 15vw;
  height: 45vh;
  justify-content: center;
  align-content: center;
  background: rgba(47, 69, 80, 0.3);
  color: #f4f4f9;
  border-radius: 20px;
  font-family: "Open Sans", sans-serif;
}

.result {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  width: 90%;
  height: 90%;
  margin: auto;
}

.resultThumb {
  max-width: 80%;
  max-height: 60%;
  margin: 15px;
  align-self: center;
  border: 2px solid #586f7c;
}

.resultTitle {
  font-weight: bold;
}

.gameList {
  margin: 20px auto;
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
}

.gameContainer {
  width: 20vw;
  height: 35vw;
  margin: 20px 20px;
  background: rgba(47, 69, 80, 0.3);
  position: relative;
  border-radius: 20px;
  overflow: scroll;
}

.gameBody {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  color: #f4f4f9;
}

.coverArt {
  max-width: 80%;
  max-height: 45%;
  margin-top: 20px;
  align-self: center;
  border: 2px solid #586f7c;
  cursor: pointer;
}

.descriptionContainer {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 3;
  border-radius: 20px;
  background: rgba(47, 69, 80, 0.9);
  color: #f4f4f9;
  overflow: scroll;
}

.description {
  max-width: 90%;
  max-height: 90%;
  overflow: scroll;
  margin: auto;
  line-height: 1.5;
}

.descriptionTitle {
  margin-bottom: 10px;
  font-weight: bold;
}

.linkContainer {
  width: 100%;
}

.moreInfoLink {
  color: #b8dbd9;
  cursor: pointer;
  width: 100%;
}

.moreInfoLink:hover {
  text-shadow: -0.5px -0.5px 0 #f4f4f9, -0.5px -0.5px 0 #f4f4f9,
    -0.5px -0.5px 0 #f4f4f9, -0.5px -0.5px 0 #f4f4f9;
}

.gameTitle {
  margin: 10px auto;
  font-weight: bold;
  font-size: 16pt;
  width: 90%;
}

.notes {
  margin: 10px auto;
  max-height: 30%;
  padding: 15px;
  width: 90%;
  overflow: scroll;
}

.noteInput {
  width: 70%;
  margin: 0px auto;
  background: #2f4550;
  color: #f4f4f9;
  border: none;
  padding: 5px;
}

/* buttons */

.addNewBtn {
  font-weight: bold;
  font-size: 16pt;
  border-radius: 20px;
  border: none;
  background: #2f4550;
  width: 30%;
  opacity: 0.7;
  color: #e6eed6;
  align-self: center;
  justify-self: flex-end;
}

.addNewBtn:hover {
  background: #b8dbd9;
  color: #e6eed6;
}

.addBtn,
.cancelBtn {
  background: rgba(47, 69, 80, 0.3);
  color: #e6eed6;
  margin: 20px;
  width: 20vw;
  height: 5vh;
  font-size: 25px;
  border: none;
  border-radius: 20px;
  transition-duration: 0.2s;
}

.addBtn:hover,
.cancelBtn:hover {
  background: #2f4550;
  opacity: 0.7;
  color: #f4f4f9;
}

.deleteBtn {
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 4;
  margin: 10px;
  border: none;
  background: none;
  color: #2f4550;
  font-size: 30px;
  font-weight: 800;
  opacity: 0.7;
  text-shadow: -1px -1px 0 #f4f4f9, 1px -1px 0 #f4f4f9, -1px 1px 0 #f4f4f9,
    1px 1px 0 #f4f4f9;
}

.deleteHover {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #a72608;
  z-index: 3;
  border-radius: 20px;
  display: none;
}

.deleteBtn:hover {
  color: #a72608;
}

.deleteBtn:hover ~ .deleteHover {
  display: flex;
  transition: 0.2s;
  opacity: 0.3;
}

.editNoteBtn,
.moveBtn {
  padding: 5px 0px;
  width: 60%;
  font-size: 12pt;
  align-self: center;
  border: none;
  border-radius: 10pt;
  background: #2f4550;
  opacity: 0.7;
  color: #f4f4f9;
}

.editNoteBtn:hover,
.moveBtn:hover {
  background: #b8dbd9;
  color: #2f4550;
}

.editNoteBtn {
  justify-self: flex-end;
}

.moveBtn {
  justify-self: flex-end;
  margin-top: 10px;
  margin-bottom: 15px;
}

.cancelEditBtn {
  border: none;
  border-radius: 50pt;
  background: #2f4550;
  opacity: 0.7;
  color: #f4f4f9;
  margin: 0px 10px;
}

.cancelEditBtn:hover {
  background: #b8dbd9;
  color: #2f4550;
}

.closeDescriptionBtn {
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 4;
  margin: 10px;
  border: none;
  background: none;
  color: #2f4550;
  font-size: 15px;
  font-weight: 800;
  opacity: 0.7;
  text-shadow: -1px -1px 0 #f4f4f9, 1px -1px 0 #f4f4f9, -1px 1px 0 #f4f4f9,
    1px 1px 0 #f4f4f9;
}

.closeDescriptionBtn:hover {
  color: #a72608;
}

.open-enter-active {
  animation: fade-in 0.3s;
}

.open-leave-active {
  animation: fade-in 0.3s reverse;
}

@keyframes fade-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
