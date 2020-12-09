class UsersController < ApplicationController
    def new
        render :new 
    end

    def show
        @user = User.find_by(params[:session_token])
        render :show 
    end

    def create
        @user = User.new(user_params)

        if @user.save
            session[:session_token] = @user.reset_session_token!
            flash[:success] = ['Welcome to Music App']
            redirect_to user_url(params[:user][:email])
        else
            flash.now[:errors] = ['Invalid credentials']
            render :new
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end