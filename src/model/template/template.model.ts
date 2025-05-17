import mongoose, { Types } from "mongoose";

const options = { discriminatorKey: "type", _id: false };

// This is the base shape of every section
export const SectionBaseSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
  },
  options
);

const SectionModel = mongoose.model("Section", SectionBaseSchema);

const heroSchema = SectionModel.discriminator(
  "hero",
  new mongoose.Schema({
    data: {
      text: {
        title: String,
        subtitle: String,
      },
      bg_image: {
        src: String,
        alt: String,
      },
    },
  })
);

const gallerySchema = SectionModel.discriminator(
  "gallery",
  new mongoose.Schema({
    data: {
      heading: {
        title: String,
        subtitle: String,
      },
      images: [
        {
          src: String,
          alt: String,
        },
      ],
    },
  })
);

const templateSchema = new mongoose.Schema({
  home: {
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
  },
});

const templateModel = mongoose.model("Template", templateSchema);
