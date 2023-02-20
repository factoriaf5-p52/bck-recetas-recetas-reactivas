import { Injectable } from '@nestjs/common';
import { CreateBadgeDto } from './dto/create-badge.dto';
import { UpdateBadgeDto } from './dto/update-badge.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Badge, BadgeDocument } from './schema/badge.schema';


@Injectable()
export class BadgesService {
  constructor(
    @InjectModel(Badge.name)
    private readonly badgeModel: Model<BadgeDocument>
  ) { }

  create(createBadgeDto: CreateBadgeDto) {
    return this.badgeModel.create(createBadgeDto);
  }

  findAll() {
    return this.badgeModel.find().exec();
  }

  findOne(id: string) {
    return this.badgeModel.findOne({ _id: id });
  }

  update(id: string, updateBadgeDto: UpdateBadgeDto) {
    return `This action updates a #${id} badge`;
  }

  remove(id: string) {
    return this.badgeModel.findByIdAndRemove({ _id: id }).exec();
  }
}
