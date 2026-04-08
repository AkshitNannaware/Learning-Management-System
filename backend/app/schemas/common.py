from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field


class MongoModel(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: str | None = Field(default=None, alias="_id")


class APIMessage(BaseModel):
    message: str


class Timestamped(BaseModel):
    created_at: datetime
    updated_at: datetime
