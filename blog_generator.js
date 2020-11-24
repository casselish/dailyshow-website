const fs = require('fs');
const ejs = require('ejs');

let post_contents = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
let post_template = fs.readFileSync('views/blog_post.ejs', 'utf8');
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');


for (i = 0; i < post_contents.length; i++) {
  let post_html = ejs.render(post_template, {
    filename: __dirname + '/views/blog_post.ejs',
    data: post_contents[i]
  });
  //console.log(post_contents[i].title);
  fs.writeFileSync('build/blog/'+post_contents[i].title+'.html', post_html, 'utf8');

}

  let index_html = ejs.render(index_template, {
    filename: __dirname + '/views/index.ejs',
    data: 'home'
  });

  fs.writeFileSync('build/index.html', index_html, 'utf8');

  let about_html = ejs.render(about_template, {
    filename: __dirname + '/views/about.ejs',
    data: 'about'
  });

  fs.writeFileSync('build/about.html', about_html, 'utf8');




  // <!--
  //   <section id="blog-table">
  //     <table>
  //       <tr>
  //         <th>Navbar</th>
  //         <th>Author</th>
  //         <th>Date</th>
  //         <th>Time</th>
  //         <th>Title</th>
  //         <th>Content</th>
  //         <th>Subject</th>
  //       </tr>
  //       <tr>
  //         <%- include('global/navbar'); %>
  //         <td><%= data.author %></td>
  //         <td><%= data.date %></td>
  //         <td><%= data.time %></td>
  //         <td><%= data.title %></td>
  //         <td><%= data.content %></td>
  //
  //          <td>
  //           <% if (data.subject.length > 0){ %>
  //            <ol>
  //              <% data.subject.forEach(function(val){%>
  //             <li> <%=val%></li>
  //              <%}) %>
  //           </ol>
  //            <%}%>
  //         </td>
  //       </tr>
  //     </table>
  //   </section> -->
