class PairsController < ApplicationController

	def index
		@pairs = pair.all
	end

	def new
		@pair = pair.new
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