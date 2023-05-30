package issuetracker.issuetracker.domain.page.mapper;

import issuetracker.issuetracker.domain.page.dto.CountInfo;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CountRowMapper implements RowMapper<CountInfo> {
    @Override
    public CountInfo mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new BeanPropertyRowMapper<>(CountInfo.class).mapRow(rs, rowNum);
    }
}