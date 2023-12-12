import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const MapContainer = styled.div`
  width: 40%;
  height: 400px;
  border: 1px solid #eee;
  border-radius: 1rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;

  .pagination_wrap {
    margin-top: -2rem;
  }
  @media (max-width: 1200px) {
    padding: 0;
    margin-top: 2rem;
    width: 100%;

    .pagination_wrap {
      margin-top: 0;
    }
  }
  .total_info {
    display: flex;
    align-items: baseline;
    margin-bottom: 0.5rem;
    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
    span {
      color: #888;
      font-size: 0.875rem;
      letter-spacing: -0.04rem;
    }
  }
  .list_header {
    display: grid;
    grid-template-columns: 1.8fr 1.5fr 1fr 0.3fr;
    padding: 0.5rem 0;
    font-size: 0.75rem;
    font-weight: 400;
    color: #777;
    border-top: 1.5px solid #000;
    border-bottom: 1px solid #555;
    @media (max-width: 1500px) {
      grid-template-columns: 1.8fr 1.5fr 1fr auto;
    }

    > li:first-child {
      padding-left: 1rem;
    }
    > li:last-child {
      padding-left: 0;
      text-align: center;
      @media (max-width: 1500px) {
        padding-right: 0.5rem;
      }
    }
  }
`;

export const ListTr = styled.li`
  font-size: 0.875rem;
  display: grid;
  grid-template-columns: 1.8fr 1.5fr 1fr 0.3fr;
  border-bottom: 1px solid #ccc;
  padding: 0.875rem 0;

  @media (max-width: 1500px) {
    grid-template-columns: 1.8fr 1.5fr 1fr auto;
  }
  .title_pointer {
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }
  > span:first-child {
    padding-left: 1rem;
  }
  .detail_link {
    padding-left: 0;
    text-align: center;
  }

  .detail_btn {
    border: 1px solid #ccc;
    font-size: 0.75rem;
    border-radius: 0.25rem;
    padding: 0.2rem 0.35rem;

    &:hover {
      font-weight: 600;
    }
    &:active {
      background-color: #f5f5f5;
    }
  }
`;
