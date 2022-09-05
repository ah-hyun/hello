package youCanDoIt;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


@WebServlet("/board")
public class BoardServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public BoardServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		response.setCharacterEncoding("utf-8"); // 한글처리.
	      response.setContentType("text/json; charset=utf-8");
		
	      // 조회의 기능 구현.
		
		BoardDAO dao = BoardDAO.getInstance();
		List <Board> list  = dao.getBoardList();

		String json = "[";
	      for (int i = 0; i < list.size(); i++) {
	    	  json+="{\"bno\": \""+list.get(i).getBno() + "\", \"title\": \""+list.get(i).getTitle()+"\", \"content\": \""+list.get(i).getContent()
	                  +"\", \"writer\": \""+list.get(i).getWriter()+"\", \"creation_date\": \""+list.get(i).getCreationDate()+"\""+"}";
	         if (i != list.size() - 1) {
	            json += ",";
	         }
	      }
	      json += "]";

		response.getWriter().print(json); // 출력 스트림으로 출력
	}
	
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		response.setCharacterEncoding("utf-8");

		// 추가, 삭제의 기능을 구현.

		
//		String indel = request.getParameter("indel");
//	      if (indel.equals("insert")) {
//
//	         Board  board = new Board();
//	         board.setBno(Integer.parseInt(request.getParameter("bno")));
//	         board.setTitle(request.getParameter("title"));
//	         board.setContent(request.getParameter("Content"));
//	         board.setWriter(request.getParameter("writer"));
//	         board.setCreationDate(request.getParameter("creation_date"));
//	         
//
//	         BoardDAO dao = BoardDAO.getInstance();
//	         if (dao.insertBoard(board)) {
//	            response.getWriter().print("success");
//	         } else {
//	            response.getWriter().print("fail");
//	         }
//	      } else if (indel.equals("delete")) {
//	         // 삭제처리. 
//	         Board board = new Board();
//	       
//	         board.setBno(Integer.parseInt(request.getParameter("bno")));
//	         board.setTitle(request.getParameter("title"));
//	         board.setContent(request.getParameter("Content"));
//	         board.setWriter(request.getParameter("writer"));
//	         board.setCreationDate(request.getParameter("creation_date"));
//
//	         BoardDAO dao = BoardDAO.getInstance();
//	         
//	         if (dao.deleteBoard(0) {
//	            response.getWriter().print("success");
//	         } else {
//	            response.getWriter().print("fail");
//	         }
//	      }

	   }

}
