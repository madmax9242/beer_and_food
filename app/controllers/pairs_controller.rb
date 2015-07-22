class PairsController < ApplicationController

	def index
		@pairs = Pair.all
	end

	def new
		@pair = Pair.new
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