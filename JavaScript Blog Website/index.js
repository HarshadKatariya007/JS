const blog = (e) =>
{
   e.preventDefault();

   let Blog_Title = document.getElementById("blog_title").value;
   let Blog_Image = document.getElementById("blog_img").value;
   let Blog_Content = document.getElementById("blog_content").value;
   let Blog_Category = document.getElementById("blog_category").value;
   let Blog_Username = document.getElementById("blog_username").value;

   let Blog_Data = document.createElement("h3");
   Blog_Data.innerHTML=Blog_Title;

   let Blog_Data_2 = document.createElement("img");
   Blog_Data_2.src=Blog_Image;

   let Blog_Data_3 = document.createElement("p");
   Blog_Data_3.innerHTML=Blog_Content;

   let Blog_Data_4 = document.createElement("h5");
   Blog_Data_4.innerHTML=Blog_Category;

   let Blog_Data_5 = document.createElement("h5");
   Blog_Data_5.innerHTML=Blog_Username;
   let div=document.createElement("div");

   div.append(Blog_Data,Blog_Data_2,Blog_Data_3,Blog_Data_4,Blog_Data_5);

   document.getElementById("blog_item").append(div)
}



document.getElementById("blog_data").addEventListener("submit",blog);