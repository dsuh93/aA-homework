class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_email(
            params[:user][:email],
            params[:user][:password]
        )

        if @user 
            self.log_in_user!(@user)
            redirect_to user_url(@user.id)
        else
            flash[:errors] = ['Need to create an account to log in!']
            redirect_to new_user_url
        end
    end

    def destroy
        @user = User.find_by(session[:session_token])
        session[:session_token] = nil
        @user.reset_session_token!
    end
end