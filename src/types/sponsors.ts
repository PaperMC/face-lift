export interface SponsorData {
  ocData: OpenCollectiveData;
  ghData: GitHubSponsorsData;
}

export interface OpenCollectiveContributor {
  name: string;
  image: string;
  totalAmountDonated: number;
}

export interface OpenCollectiveData {
  collective: {
    name: string;
    slug: string;
    stats: {
      balance: {
        valueInCents: number;
      };
      monthlySpending: {
        valueInCents: number;
      };
    };
    contributors: {
      totalCount: number;
      nodes: OpenCollectiveContributor[];
    };
  };
}

export interface GithubSponsorNode {
  login: string;
  avatarUrl: string;
}

export interface GitHubSponsorsData {
  organization: {
    sponsors: {
      totalCount: number;
      nodes: GithubSponsorNode[];
    };
  };
}
