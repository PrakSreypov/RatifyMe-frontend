// MUI Import 
import {
    Phone as PhoneIcon,
    Email as EmailIcon,
    Cake as CakeIcon,
    School as SchoolIcon,
    Public as PublicIcon,
    BusinessCenter as BusinessCenterIcon,
} from "@mui/icons-material";

// Custom Import
import ProfileModal from "../../components/ProfileModal";

// Fetching Data Import
import { useFetchEarnerByIdQuery } from "../../store/api/earnerManagement/earnerApis";

// ============ Start Profile Earner Modal Custom Button ============
const ProfileEarnerModal = ({ open, onClose, userId }) => {
    // Prevent the API query from running if userId is null or undefined
    const { data, isLoading, isError } = useFetchEarnerByIdQuery(userId, { skip: !userId });

    const earner = data?.data;

    return (
        // Call Profile Modal
        <ProfileModal
            open={open}
            onClose={onClose}
            item={earner}
            avatarKey="User.profileImage"
            nameKey="User.username"
            roleKey="User.Role.name"
            desKey="User.bio"
            details={[
                { icon: <PhoneIcon fontSize="small" />, label: "Phone", valueKey: "User.phoneNumber" },
                { icon: <CakeIcon fontSize="small" />, label: "Date of Birth", valueKey: "User.dob" },
                { icon: <EmailIcon fontSize="small" />, label: "Email", valueKey: "User.email" },
                {
                    icon: <BusinessCenterIcon fontSize="small" />,
                    label: "Organization",
                    valueKey: "AcademicBackground.Institution.name",
                },
                {
                    icon: <SchoolIcon fontSize="small" />,
                    label: "Education",
                    valueKey: "AcademicBackground.AcademicLevel.name",
                },
                { icon: <PublicIcon fontSize="small" />, label: "Country", valueKey: "User.nationality" },
            ]}
        >
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}
        </ProfileModal>
    );
};

export default ProfileEarnerModal;
// ============ End Profile Earner Modal Custom Button ============