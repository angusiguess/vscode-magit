import { View } from "../general/view";
import { Section, SectionHeaderView } from "../sectionHeader";
import { TextView } from "../general/textView";
import { Commit } from "../../typings/git";
import { LineBreakView } from "../general/lineBreakView";

export class CommitSectionView extends View {
  isFoldable = true;

  constructor(private commits: Commit[]) {
    super();
    this.subViews = [
      new SectionHeaderView(Section.RecentCommits),
      ...commits.map(commit => new CommitItemView(commit)),
      new LineBreakView()
    ];
  }
}

export class CommitItemView extends TextView {

  constructor (private commit: Commit) {
    super();
    this.textContent = `${commit.hash.slice(0, 7)} ${commit.message}`;
  }
}