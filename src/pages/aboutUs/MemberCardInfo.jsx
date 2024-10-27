// MUI import
import { Box, Typography, CardMedia, Stack } from "@mui/material";

// Custom import
import LandingContainer from "../../components/styles/LandingContainer";
import theme from "../../assets/themes";

// Image import
import LyhourProfile from "../../assets/images/LyhourProfile.jpeg";
import YamongProfile from "../../assets/images/YamongProfile.jpeg";
import SreyPovProfile from "../../assets/images/SreyPovProfile.jpeg";
import ChounanProfile from "../../assets/images/ChounanProfile.jpeg";
import MelenProfile from "../../assets/images/MelenProfile.jpeg";
import BunthongProfile from "../../assets/images/BunthongProfile.jpeg";
import RothanakProfile from "../../assets/images/RothanakProfile.png";
import RothaProfile from "../../assets/images/RothaProfile.png";
import RatifyMEFevicon from "../../assets/icons/RatifyME-Fevicon.svg";

const cardData = [
    {
        id: 1,
        title: "Prak Sreypov",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: SreyPovProfile,
        link: "#",
    },
    {
        id: 2,
        title: "Khun Malen",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: MelenProfile,
        link: "#",
    },
    {
        id: 3,
        title: "Tep Chounan",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: ChounanProfile,
        link: "#",
    },
    {
        id: 4,
        title: "Sreang Lyhour",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: LyhourProfile,
        link: "#",
    },
    {
        id: 5,
        title: "Samon Rotha",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: RothaProfile,
        link: "#",
    },
    {
        id: 6,
        title: "Ly Diyamong",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: YamongProfile,
        link: "#",
    },
    {
        id: 7,
        title: "Phok Keomonyrothanak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: RothanakProfile,
        link: "#",
    },
    {
        id: 8,
        title: "Ron Bunthong",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.",
        imageUrl: BunthongProfile,
        link: "#",
    },
];

const BookCard = ({ title, description, imageUrl }) => {
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "10px",
                maxWidth: "300px",
                width: "100%",
                height: "350px",
                backgroundColor: "whitesmoke",
                // boxShadow: "1px 1px 12px #000",
                perspective: "2000px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000",
                "&:hover .cover": {
                    transform: "rotateY(-80deg)",
                    transition: "all 0.5s",
                },
            }}
        >
            <Box sx={{ padding: 2, textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
            <Box
                className="cover"
                sx={{
                    top: 0,
                    position: "absolute",
                    backgroundColor: "lightgray",
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "all 0.5s",
                    transformOrigin: "0",
                    // boxShadow: "1px 1px 12px #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    boxShadow: theme.customShadows.default,
                }}
            >
                <CardMedia
                    component="img"
                    src={imageUrl}
                    alt={title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        // borderRadius: "50%",
                        // marginBottom: "8px",
                        position: "relative",
                        borderRadius: "10px",
                    }}
                />
                <Stack
                    sx={{
                        position: "absolute",
                        top: "91%",
                        p: 1,
                        backgroundColor: "white",
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderRadius: "10px",
                        boxShadow: theme.customShadows.default,
                    }}
                >
                    <Typography variant="h5" fontWeight={theme.fontWeight.semiBold}>
                        {title}
                    </Typography>
                    <Box component="img" src={RatifyMEFevicon} sx={{ width: 24 }} alt="Icon" />
                </Stack>
            </Box>
        </Box>
    );
};

const MemberCardInfo = () => {
    return (
        <LandingContainer>
            <Stack
                sx={{ gap: 2, justifyContent: "center", my: 6, alignItems: "center", animation: "bounceIn 2s ease-in-out 0.5s" }}
            >
                <Typography textAlign="center" variant="h1" fontWeight={theme.fontWeight.bold} color="#0B3558">
                    TechA Members team
                </Typography>

                <Typography variant="h3" textAlign="center" color="#476788" maxWidth={800}>
                    Our team is customer-obsessed, mission-oriented, and believes anything is possible. 🚀
                </Typography>
            </Stack>

            <Stack
                direction="row"
                justifyContent="center"
                sx={{
                    flexWrap: "wrap",
                    gap: 4,
                    "& > *": {
                        flexBasis: "calc(25% - 24px)",
                        "@media (max-width: 1450px)": {
                            flexBasis: "calc(33.33% - 24px)",
                        },
                        "@media (max-width: 900px)": {
                            flexBasis: "calc(50% - 24px)",
                        },
                        "@media (max-width: 600px)": {
                            flexBasis: "100%",
                        },
                    },
                }}
            >
                {/* <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}> */}
                {cardData.map((card) => (
                    <BookCard key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
                ))}
                {/* </Box> */}
            </Stack>
            <style>
                {`
                @keyframes bounceIn {
                    60% {
                        opacity: 1;
                        transform: translateY(15px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
        </LandingContainer>
    );
};

export default MemberCardInfo;
