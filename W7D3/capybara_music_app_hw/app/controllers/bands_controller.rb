class BandsController < ApplicationController

    def index
        @bands = Band.all
        render :index
    end

    def show
        @band = Band.find_by(id: params[:id])
        render :show
    end

    def new
        @band = Band.new
        render :new
    end

    def edit
        @band = Band.find_by(id: params[:id])
        render :edit
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            flash[:success] = ['Your band has been added!']
            redirect_to band_url(@band)
        else
            flash.now[:errors] = ['Invalid credentials']
            render :new 
        end
    end

    def update
        @band = Band.find_by(id: params[:id])
        if @band.update_attributes(band_params)
            flash[:success] = ['Your band has been updated!']
            redirect_to band_url(@band.id)
        else
            render :edit 
        end
    end

    def destroy
        @band = Band.find_by(id: params[:id])
        @band.destroy
        flash[:success] = ['The band has been deleted!']
        redirect_to bands_url 
    end

    private
    def band_params
        params.require(:band).permit(:name)
    end

end