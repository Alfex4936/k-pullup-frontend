import { apiPostResponse } from "../api-helpers";

const approveReport = async (reportId: number) => {
  return apiPostResponse(`/api/v1/reports/approve/${reportId}`, undefined, {
    cache: "no-store",
  });
};

export default approveReport;
