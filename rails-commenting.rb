# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)The BlogPosts part of the controller is just the name of the model that they had created so this controller is for that model and is a child of the ApplicationController which is the same for every controller 
class BlogPostsController < ApplicationController
  def index
    # ---2)This line of code is inside a method called index which is a Restful Route and HTTP verb get the line of code below is assigned to an instance variable and it is plural because there could be alot of blog posts inside of this model, it is assigned to BlogPost.all which is the name of the model and .all which is appended to the end basically tells rails to show every entry in the model. Which is the point of index Restful Routes.
    @posts = BlogPost.all
  end

  # ---3) The method below is named show which is a Restful Route again with an HTTP verb of get because it is getting a value for whatever purpose. In this method there is a singular instance variable because show only wants to show us one value not all of them like in the previous method. It is assigned to BlogPost which is the name of the model .find is a method that searches the model for whatever we pass into its parenthesis in this case it is params which acts like a ruby hash and we are searching that has for a symbol of id which corresponds directly to a model entry. So the method below only shows that specific id given
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The method is called new which has the same HTTP verbs as above except it will allow the dev or the user to add a new entry either by manually changing the url or it will display a frontend form for the user to fill out. Again the instance variable is singular because it is only creating one new entry at a time not multiple.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This code is inside of the create method which unlike above the HTTP verb associated with it is post allowing for the dev or the user to create new entrys. The instance variable is assigned to the name of the model with .create appended to it which is a method the creates a new entry. Inside of its parenthesis is a set of directions of what to take in we will talk about it later on. After the instance variable is a conditional statement allowing for a smooth frontend expierence. If the post passes the parameters of the create method it will redirect the user to the new page of the blog post just to show the user that it has successfully worked. If not it will stay on the forms site to show that it did not work. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) This method has an HTTP verb of get associated with it and the instance variable is singular because its only pull one specific entry from the model exactly like in the show method. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Exactly like the create method except its HTTP verb is put or patch, put updates the entire thing while patch only updates a specific portion. And just like in the create method it takes in a set of instructions we will talk about later in the update methods parenthesis, followed by a conditonal which does the exact same thing as the creates. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)The destroy method has an HTTP verb of delete which deletes a specific entry in the model the line of code is in the else statement of a conditional so if the condition is false then the users page will redirect to the post they are trying to delete showing to them that it did not work. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private method will not show anything below it to rails its only visible for the developer and can only be accessed by the dev. It allows for params like on line 10 to be made without disrupting the flow of the Restful Routes and the controller.
  private
  def blog_post_params
    # ---10) The line below is in a method called blog_post_params which has been called several times in the controller. It basically gives the methods outside the private a set of parameters on what to take in when creating or updating a model entry. It is requiring the blog_post model to take in a title and content, if the user or the dev does not put in both of the parameters the method will not go and there will be an error. Setting this information to a method allows for it to be called everywhere in the controller saving code and time. 
    params.require(:blog_post).permit(:title, :content)
  end
end
