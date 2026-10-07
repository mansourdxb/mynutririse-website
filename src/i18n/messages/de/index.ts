import type { Facts } from "@/data/facts";
import type { Messages } from "../index";
import common from "./common";
import about from "./about";
import home from "./home";
import features from "./features";
import tools from "./tools";
import blog from "./blog";
import halal from "./halal";
import compare from "./compare";
import recipes from "./recipes";
import press from "./press";
import quiz from "./quiz";
import support from "./support";
import privacy from "./privacy";
import terms from "./terms";

const de = (f: Facts): Messages => ({
  common: common(f),
  about: about(f),
  home: home(f),
  features: features(f),
  tools: tools(f),
  blog: blog(f),
  halal: halal(f),
  compare: compare(f),
  recipes: recipes(f),
  press: press(f),
  quiz: quiz(f),
  support: support(f),
  privacy: privacy(f),
  terms: terms(f),
});

export default de;
