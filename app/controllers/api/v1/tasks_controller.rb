module Api
  module V1
    class TasksController < ApplicationController
      # POST /api/v1/tasks
      def create
        task = Task.new(task_params)
        if task.save
          render json: task, status: :created
        else
          render json: task.errors, status: :unprocessable_entity
        end
      end

      # GET /api/v1/tasks
      def index
        tasks = Task.all
        render json: tasks
      end

      # GET /api/v1/tasks/:id
      def show
        task = Task.find(params[:id])
        render json: task
      end

      # PATCH /api/v1/tasks/:id
      def update
        task = Task.find(params[:id])
        if task.update(task_params)
          render json: task
        else
          render json: task.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/tasks/:id
      def destroy
        task = Task.find(params[:id])
        task.destroy
        head :no_content
      end

      private

      def task_params
        params.require(:task).permit(:title, :description, :status, :due_date)
      end
    end
  end
end
