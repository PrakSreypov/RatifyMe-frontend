import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";
import SearchBar from "../../components/SearchBar";
import DashboardContainer from "../../components/styles/DashboardContainer";
import BadgeList from "./BadgeList";
import { useFetchBadgesQuery } from "../../store/api/badgeManagement/badgeApi";
import { Box, CardMedia, Typography } from "@mui/material";
import theme from "../../assets/themes";
import StatusCode from "../../assets/images/NoData.svg";
import { useLocation } from "react-router";
import AlertMessage from "../../components/alert/AlertMessage";
import PageLoading from "../../components/loading/PageLoading";

const BadgeManagement = () => {
    const { state } = useLocation();
    const [page, setPage] = useState(1);
    const [limit] = useState(10);

    const [searchQuery, setSearchQuery] = useState("");
    const { roleId, issuerData, institutionData, userInfo } = useSelector((state) => state.global);

    let activeId = null;
    let field = null;

    if (roleId === 2 && institutionData?.id) {
        activeId = institutionData.id;
        field = "institutionId";
    } else if (roleId === 3 && issuerData?.id) {
        activeId = issuerData.id;
        field = "issuerId";
    } else if (roleId === 1 && userInfo?.id) {
        activeId = null;
        field = null;
    }

    const { data: badges, isLoading } = useFetchBadgesQuery(
        roleId === 1 ? { search: searchQuery } : { field, fk: activeId, search: searchQuery },
        { skip: roleId !== 1 && (!activeId || !field) },
    );

    const allowRole = roleId === 3 ? true : false;

    const [result, setResult] = useState(badges?.total || 0);

    useEffect(() => {
        if (badges?.total) {
            setResult(badges?.results);
        } else if (badges?.results) {
            setResult(badges?.total);
        } else {
            setResult(0);
        }
    }, [badges]);

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const onPage = (newPage) => {
        setPage(newPage);
    };

    return (
        <DashboardContainer sx={{ pb: 4 }}>
            <PageLoading isLoading={isLoading} />
            {/* Show AlertMessage if successMessage exists */}
            {state?.successMessage && <AlertMessage variant="success">{state.successMessage}</AlertMessage>}

            <PageTitle title="Badge Management" subtitle="Monitor, assign, and manage all your digital badges with ease." />

            <SearchBar
                showButton={allowRole}
                textInButton="Add Badge"
                badges={badges?.data || []}
                onSearchChange={handleSearchChange}
                total={badges?.total || 0}
                onPage={onPage}
                limit={limit || []}
                page={page || []}
                result={result || []}
            >
                {badges?.total === 0 ? (
                    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
                        <CardMedia
                            component="img"
                            image={StatusCode}
                            alt="No badges found"
                            sx={{ maxWidth: 400, width: "100%" }}
                        />
                        <Typography variant="h6" mt={2} textAlign="center" color={theme.palette.text.secondary}>
                            No badges Found
                        </Typography>
                    </Box>
                ) : (
                    <BadgeList />
                )}
            </SearchBar>
        </DashboardContainer>
    );
};

export default BadgeManagement;
