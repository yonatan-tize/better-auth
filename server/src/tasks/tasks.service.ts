import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTaskDto: Prisma.tasksCreateInput) {
    return this.prisma.tasks.create({
      data: createTaskDto,
    });
  }

  findAll() {
    return this.prisma.tasks.findMany();
  }

  findOne(id: string) {
    return this.prisma.tasks.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.tasks.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: string) {
    return this.prisma.tasks.delete({
      where: { id },
    });
  }
}
