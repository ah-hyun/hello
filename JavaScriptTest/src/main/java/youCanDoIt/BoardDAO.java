package youCanDoIt;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO extends DAO {

	private static BoardDAO bd = new BoardDAO();
	
	private BoardDAO() {
	
	}
	
	public static BoardDAO getInstance() {
		return bd;
	}
	
	public List<Board> getBoardList() {
		String sql = "select * from tbl_board";
		List<Board> list = new ArrayList<>();
		conn();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				Board board = new Board();
				board.setBno(rs.getInt("bno"));
				board.setTitle(rs.getString("title"));
				board.setContent(rs.getString("content"));
				board.setWriter(rs.getString("writer"));
				board.setCreationDate(rs.getString("creation_Date"));
				list.add(board);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return list;
	}

	
	public boolean deleteBoard(int bno) {
		conn();
		String sql = "delete from tbl_board where bno = ?";
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, bno);
			
			int result = pstmt.executeUpdate();
			if ( result > 0) {
				return true;
			}
			
		}catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return false;
	}

	public boolean insertBoard(Board board) {
		conn();
		String sql = "insert into tbl_board (bno, title, content, writer, creation_date) values (?,?,?,?,?)";
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, board.getBno());
			pstmt.setString(2, board.getTitle());
			pstmt.setString(3, board.getContent());
			pstmt.setString(4, board.getWriter());
			pstmt.setString(5, board.getCreationDate());
		
			int result = pstmt.executeUpdate();
			
			if ( result > 0) {
				return true;
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return false;
	}
}
