import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class PassportDetailsDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    passportNumber!: string;

    @Field(() => Date)
    @Type(() => Date)
    issueDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    expiryDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    country!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;
}

export { PassportDetailsDto as PassportDetailsDto };