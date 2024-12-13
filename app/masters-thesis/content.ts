export const mastersThesisContent = {
  thesis: {
    title: "Improving Megaflow Cache Performance in Open vSwitch with Coflow-Aware Branch Prediction",
    authors: [
      {
        name: "Emil Ståhl",
        role: "Author",
        affiliation: "KTH Royal Institute of Technology"
      },
      {
        name: "Marco Chiesa",
        role: "Examiner",
        affiliation: "KTH Royal Institute of Technology"
      },
      {
        name: "Hamid Ghasemirahni",
        role: "Supervisor",
        affiliation: "KTH Royal Institute of Technology"
      },
      {
        name: "Eelco Chaudron",
        role: "Supervisor",
        affiliation: "Red Hat"
      },
      {
        name: "Simone Ferlin-Reiter",
        role: "Supervisor",
        affiliation: "Red Hat"
      }
    ],
    pdfPath: "/documents/Improving_Megaflow_Cache_Performance_in_Open_vSwitch_with_Coflow-Aware_Branch_Prediction.pdf",
    githubUrl: "https://raw.githubusercontent.com/emilstahl97/Open-vSwitch-with-Coflow-Aware-Prediction/main/thesis/Improving_Megaflow_Cache_Performance_in_Open_vSwitch_with_Coflow-Aware_Branch_Prediction.pdf",
    sourceCodeUrl: "https://github.com/emilstahl97/Open-vSwitch-with-Coflow-Aware-Prediction",
    presentationVideoUrl: "https://www.youtube.com/embed/ddpIN-swy2w",
    presentationDescription: "Watch the presentation and defense of my master's thesis, originally presented on October 22, 2024.",
    description: "A master's thesis conducted in collaboration with Red Hat explores potential optimizations for Open vSwitch (OVS) by employing coflows to anticipate imminent network traffic. This approach aims to reduce the latency-inducing upcalls to the control plane, which are typically triggered by cache misses in the OVS megaflow cache. The study includes a series of benchmarks performed on an OVN-simulated, single-node OCP cluster. These benchmarks utilize XDP to timestamp packets at both the ingress and egress points of the cluster, measuring latency across various traffic scenarios. These scenarios are generated using synthetic coflow traffic traces with varying flow size distributions. The findings provide a comprehensive analysis of how OVS performance is influenced by accurately predicting different proportions of future flows under varying traffic conditions.",
    redHatGithubUrl: "https://github.com/RedHatResearch/ovscon24-Open-vSwitch-with-coflow-aware-prediction"
  },
  paper: {
    title: "Enabling traffic prediction in virtual switching: A case study",
    authors: [
      {
        name: "Emil Ståhl",
        role: "Author",
        affiliation: "KTH Royal Institute of Technology"
      },
      {
          name: "Simone Ferlin-Reiter",
          role: "Author",
          affiliation: "Red Hat"
      },
      {
        name: "Marco Chiesa",
        role: "Author",
        affiliation: "KTH Royal Institute of Technology"
      },
      {
          name: "Eelco Chaudron",
          role: "Author",
          affiliation: "Red Hat"
        },
        {
          name: "Gianni Antichi",
          role: "Author",
          affiliation: "Queen Mary University of London"
        }
    ],
    pdfPath: "https://raw.githubusercontent.com/emilstahl97/Open-vSwitch-with-Coflow-Aware-Prediction/main/paper/Enabling_traffic_prediction_in_virtual_switching_A_case_study.pdf",
    description: "This paper presents a condensed version of the research, focusing on the key findings and methodologies used to improve Open vSwitch performance through coflow-aware branch prediction.",
    githubUrl: "https://github.com/emilstahl97/Open-vSwitch-with-Coflow-Aware-Prediction/blob/main/paper/Enabling_traffic_prediction_in_virtual_switching_A_case_study.pdf",
    sourceCodeUrl: "https://github.com/emilstahl97/Open-vSwitch-with-Coflow-Aware-Prediction",
    videoUrl: "https://www.youtube.com/embed/Z55xcDCCxgo",
    presentationDescription: "Watch the presentation from OVSCON 2024 where I discuss the findings from my research on improving Open vSwitch performance through coflow-aware branch prediction. This talk covers the key concepts, methodology, and results from our work on optimizing virtual switching in cloud environments.",
    redHatGithubUrl: "https://github.com/RedHatResearch/ovscon24-Open-vSwitch-with-coflow-aware-prediction"
  }
}; 
