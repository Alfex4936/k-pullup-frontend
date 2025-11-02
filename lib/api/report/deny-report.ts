import { apiPostResponse } from "../api-helpers";

const denyReport = async (reportId: number) => {
  return apiPostResponse(`/api/v1/reports/deny/${reportId}`, undefined, {
    cache: "no-store",
  });
};

export default denyReport;
