"use client";
import "@builder.io/widgets";
import "@builder.io/widgets/dist/lib/builder-widgets-async";
import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
import Counter from "./components/Counter/Counter";

const imageUrl =
  "https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d";

Builder.registerComponent(
  dynamic(() => import("./components/Hero/Carousel-item")),
  {
    name: "hero-carousel-item",
    inputs: [
      {
        name: "heading",
        type: "string",
        required: true,
        defaultValue: "\u0158\u00EDzen\u00ED rizik",
      },
      {
        name: "paragraph",
        type: "string",
        defaultValue:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus eaque? Laboriosam in rerum error nam quos nobis reprehenderit.",
      },
      {
        name: "button1",
        type: "string",
        defaultValue: "P\u0159edej\u00EDt \u0161kod\u00E1m",
      },
      {
        name: "button2",
        type: "string",
        defaultValue: "V\u00EDce informac\u00ED",
      },
      {
        name: "button1Link",
        type: "url",
        defaultValue: "P\u0159edej\u00EDt \u0161kod\u00E1m",
      },
      {
        name: "button2Link",
        type: "url",
        defaultValue: "V\u00EDce informac\u00ED",
      },
      {
        name: "image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        defaultValue: imageUrl,
      },
    ],
  }
);
// ------------------
// Buttons
// ------------------

Builder.registerComponent(
  dynamic(() => import("./components/Buttons/Button")),
  {
    name: "Button",
    inputs: [
      {
        // Option to select a value
        name: "backgroundColor",
        type: "string",
        defaultValue: "red",
        enum: ["red", "blue", "white"],
      },
      {
        name: "text",
        type: "string",
        defaultValue: "Button",
      },
      {
        name: "url",
        type: "url",
        defaultValue: "#",
      },
    ],
  }
);
// ------------------
// Image
// ------------------

Builder.registerComponent(
  dynamic(() => import("./components/Picture/Picture")),
  {
    name: "ImageCustom",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        defaultValue: imageUrl,
      },
    ],
  }
);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
