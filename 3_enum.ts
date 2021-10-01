enum Membership {
    simple,
    standard,
    premium,

}

const membership = Membership.standard;
const  membershipReverse = Membership[2]
console.log(membershipReverse);
console.log(membership);

enum SocialMedia {
    Twitter = 'Twitter',
    Facebook = 'Facebook',
    Instagram = 'Instagram'
}

const social = SocialMedia.Instagram
console.log(social);