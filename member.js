function skillsMember()     { return new SkillsMember(); }
function skillsMemberList() { return new SkillsMemberList(); }

function SkillsMember() {
    this.skills = [];
    this.add = function(skill) {
        this.skills.push(skill);
    };
}

function SkillsMemberList() {
    this.members = [];
    this.add = function(member) {
        this.members.push(member);
    };
}