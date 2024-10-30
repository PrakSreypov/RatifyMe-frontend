import * as yup from "yup";

const badgeSchema = yup.object().shape({
    narrative: yup
        .string()
        .min(10, "Criteria must be at least 10 characters long")
        .max(255, "Criteria cannot exceed 255 characters")
        .required("Criteria is required"),
    startedDate: yup
        .date()
        .typeError("Please select a valid date")
        .min(new Date(new Date().setHours(0, 0, 0, 0)), "Start date cannot be in the past")
        .required("Start date is required"),
    endDate: yup
        .date()
        .typeError("Please select a valid date")
        .min(yup.ref("startedDate"), "End date cannot be earlier than Start Date")
        .required("End date is required"),
    expiredDate: yup
        .date()
        .typeError("Please select a valid date")
        .min(yup.ref("endDate"), "Expiration date cannot be earlier than End Date"),
    badgeName: yup
        .string()
        .min(3, "Badge name must be at least 3 characters long")
        .max(50, "Badge name cannot exceed 50 characters")
        .required("Badge name is required"),
    badgeDescription: yup.string().max(255, "Description cannot exceed 255 characters").required("Description is required"),
});

export default badgeSchema