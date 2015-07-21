class BananasController < ApplicationController

	def index
		@bananas = Banana.all
	end

	def new
		@banana = Banana.new
	end

	def create
	end

	def edit

	end

	def update
	end

	def destroy

	end


end