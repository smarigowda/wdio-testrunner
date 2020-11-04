import { Auth } from "../page-objects/Auth";
import { Editor } from "../page-objects/Editor";
import { users } from "../fixtures/users";
import Chance from "chance";

const chance = new Chance();

const auth = new Auth();
const editor = new Editor();

describe("Post Editor", () => {
  before(() => {
    auth.load();
    auth.login(users.user1);
  });
  beforeEach(() => {
    editor.load();
  });
  it("should load properly", () => {
    editor.shouldLoadProperly();
  });
  it("should let you publish a new post", () => {
    // data should not be coupled to the spec
    // ex: import data from data file
    const article = {
      title: chance.word({ length: 1 }),
      description: chance.sentence({ words: 5 }),
      body: chance.sentence({ words: 20 }),
      tags: [chance.word({ length: 1 }), chance.word({ length: 1 })],
    };
    editor.submitArticle(article);
  });
});
